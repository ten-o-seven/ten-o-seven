import {useState, useEffect} from 'react';
import {useStore} from '../components/Store';

/**
 * @param {Array} assetUrls
 * @param {Array} nestedListKey
 * @return {Node} home landing page
 */
export default function useAssetLoader(assetUrls, nestedListKey) {
  const [loaded, setLoaded] = useState(false);
  const [assets, setAssets] = useState([]);
  const [status, setStatus] = useState(0);
  const {setPageOpacity} = useStore();

  useEffect(() => {
    let isMounted = true; // To prevent state update if component is unmounted
    const promises = assetUrls.map((url, index) => {
      return new Promise((resolve, reject) => {
        let otherEntries;
        if (nestedListKey) {
          otherEntries = {...url};
          url = url[nestedListKey].default;
        }
        if (url.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            setStatus(Math.round(index/assetUrls.length)*100);
            return resolve({...otherEntries, url, element: img});
          };
          img.onerror = reject;
        } else if (url.match(/\.(mp4|webm|ogg)$/) !== null) {
          const video = document.createElement('video');
          video.src = url;
          video.onloadeddata = () => {
            setStatus(Math.round(index/assetUrls.length)*100);
            return resolve({...otherEntries, url, element: video});
          };
          video.onerror = reject;
        } else {
          resolve(); // If the URL is neither image nor video, consider it loaded
        }
      });
    });

    Promise.all(promises).then((res) => {
      if (isMounted) {
        setAssets(res);
        setPageOpacity(0);
        setTimeout(()=>{
          setPageOpacity(1);
          setLoaded(true);
        }, 700);
      }
    }).catch((error) => {
      console.error('Error loading assets', error);
      if (isMounted) {
        setLoaded(true); // You may want to handle this differently in a real app
      }
    });

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false when component unmounts
    };
  }, []);

  return {loaded, assets, status};
}
