import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Anchor = styled.a`
    text-decoration: none;
    &: hover{
      color: ${({theme})=>theme.color.brand.red};
    }
    color: ${({theme})=>theme.color.gray[700]};
`;

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function AnchorList({anchorList, style}) {
  return (
    <div style={{position: 'fixed', left: 100, ...style}} >
      {anchorList.map(({level, title, anchor})=>{
        return (
          <Anchor
            key="title"
            href={`#${anchor}`}
          >
            <p style={{marginLeft: 10*level, marginTop: 10}}>{title}</p>
          </Anchor>
        );
      })}
    </div>
  );
}

AnchorList.propTypes = {
  anchorList: PropTypes.array.isRequired,
  style: PropTypes.object,
};

AnchorList.defaultProps = {
  style: {},
};

