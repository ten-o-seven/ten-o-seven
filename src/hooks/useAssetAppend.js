import {useEffect} from 'react';

/**
 * Creates react context for children
 * @param {Node} loaded The first number.
 * @param {Node} assets The first number.
 * @param {Node} assignProp The first number.
 * @param {Node} setProp The first number.
 */
export default function useAssetAppend(
    loaded,
    assets,
    assignProp = {},
    setProp = {},
) {
  useEffect(()=>{
    if (loaded) {
      let assetRef;
      assets.forEach(({element, url})=>{
        const src = url.default || url;
        const ref = src.split('/').join('').split('.')[0];
        Object.entries(assignProp).forEach(([k, v])=>{
          element[k]=v;
        });

        const parent = document.querySelector(`#${ref}`);
        parent?.append(element);
        Object.entries(setProp).forEach(([k, v])=>{
          parent.firstChild.setAttribute(k, v);
        });
        assetRef = parent.firstChild;
      });
      if (assetRef.play) assetRef.play();
    }
  }, [loaded]);
}
