import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon-alpha';

export const WorkflowsIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path d="M4.375 4.688h11.25v10.625H4.375z" opacity=".2" />
          <path d="M5 6.877v6.302l1.433-1.433a.625.625 0 1 1 .884.883l-2.5 2.5a.625.625 0 0 1-.884 0l-2.5-2.5a.625.625 0 1 1 .884-.883l1.433 1.433V6.875c.631 0 .663 0 0 0v-.003l.001-.05.006-.112a4.08 4.08 0 0 1 .41-1.52c.213-.426.542-.871 1.048-1.208.51-.34 1.16-.545 1.973-.545.812 0 1.463.205 1.972.545.506.337.835.782 1.047 1.207a4.083 4.083 0 0 1 .417 1.634v.034l.001.011v.006c0 .002-1.043.001 0 .001v6.261l.004.065a2.833 2.833 0 0 0 .282 1.05c.138.278.337.537.622.727.282.188.686.335 1.28.335.593 0 .997-.147 1.279-.335.285-.19.484-.449.622-.726A2.833 2.833 0 0 0 15 13.136V6.82h1.25v6.304H15h1.25v.018l-.001.034a4.09 4.09 0 0 1-.051.49c-.051.305-.154.72-.365 1.144-.213.425-.543.87-1.048 1.207-.51.34-1.16.544-1.973.544-.812 0-1.463-.204-1.972-.544a3.093 3.093 0 0 1-1.047-1.207 4.081 4.081 0 0 1-.417-1.634v-.034l-.001-.011v-.006c0-.002 1.092-.001 1.25-.001h-1.25V6.864a2.83 2.83 0 0 0-.035-.326 2.832 2.832 0 0 0-.25-.79 1.844 1.844 0 0 0-.623-.726c-.282-.188-.686-.335-1.28-.335-.593 0-.997.147-1.279.335-.285.19-.484.449-.622.726A2.832 2.832 0 0 0 5 6.864v.013Zm11.25-.056H15l-1.433 1.433a.625.625 0 1 1-.884-.883l2.5-2.5a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.883L16.25 6.821Z" />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          fill="currentColor"
          d="M5 6.877v6.302l1.433-1.433a.625.625 0 1 1 .884.883l-2.5 2.5a.625.625 0 0 1-.884 0l-2.5-2.5a.625.625 0 1 1 .884-.883l1.433 1.433V6.875c.631 0 .663 0 0 0v-.003l.001-.05.006-.112a4.08 4.08 0 0 1 .41-1.52c.213-.426.542-.871 1.048-1.208.51-.34 1.16-.545 1.973-.545.812 0 1.463.205 1.972.545.506.337.835.782 1.047 1.207a4.083 4.083 0 0 1 .417 1.634v.034l.001.011v.006c0 .002-1.043.001 0 .001v6.261l.004.065a2.833 2.833 0 0 0 .282 1.05c.138.278.337.537.622.727.282.188.686.335 1.28.335.593 0 .997-.147 1.279-.335.285-.19.484-.449.622-.726A2.833 2.833 0 0 0 15 13.136V6.82h1.25v6.304H15h1.25v.018l-.001.034a4.09 4.09 0 0 1-.051.49c-.051.305-.154.72-.365 1.144-.213.425-.543.87-1.048 1.207-.51.34-1.16.544-1.973.544-.812 0-1.463-.204-1.972-.544a3.093 3.093 0 0 1-1.047-1.207 4.081 4.081 0 0 1-.417-1.634v-.034l-.001-.011v-.006c0-.002 1.092-.001 1.25-.001h-1.25V6.864a2.83 2.83 0 0 0-.035-.326 2.832 2.832 0 0 0-.25-.79 1.844 1.844 0 0 0-.623-.726c-.282-.188-.686-.335-1.28-.335-.593 0-.997.147-1.279.335-.285.19-.484.449-.622.726A2.832 2.832 0 0 0 5 6.864v.013Zm11.25-.056H15l-1.433 1.433a.625.625 0 1 1-.884-.883l2.5-2.5a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.883L16.25 6.821Z"
        />
      ),
    }),
  },
});