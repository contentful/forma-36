import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const WorkflowsIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          fill="currentFill"
          d="M5 6.565v4.685h1.875a.625.625 0 0 1 .442 1.067l-2.5 2.5a.625.625 0 0 1-.884 0l-2.5-2.5a.625.625 0 0 1 .442-1.067H3.75V6.56s.003-.109.007-.163c.007-.093.02-.223.046-.376.05-.305.153-.72.365-1.144.212-.426.542-.87 1.047-1.207.51-.34 1.16-.545 1.973-.545.812 0 1.463.205 1.972.545.506.337.835.781 1.047 1.207a4.076 4.076 0 0 1 .418 1.683v6.875a2.828 2.828 0 0 0 .035.339c.038.223.11.51.25.79.14.278.338.536.623.727.282.188.686.334 1.28.334.593 0 .997-.146 1.279-.334.285-.19.484-.45.622-.726a2.833 2.833 0 0 0 .286-1.13v-5.31h-1.875a.625.625 0 0 1-.442-1.067l2.5-2.5a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 0 1-.442 1.067H16.25v5.316a4.061 4.061 0 0 1-.052.54c-.051.303-.154.72-.365 1.143-.213.425-.542.87-1.048 1.207-.509.34-1.16.544-1.972.544-.813 0-1.464-.205-1.973-.544a3.093 3.093 0 0 1-1.047-1.207 4.081 4.081 0 0 1-.418-1.68v-.005s.048.008 0 .006V6.552a2.83 2.83 0 0 0-.035-.326 2.832 2.832 0 0 0-.25-.79 1.844 1.844 0 0 0-.623-.726c-.282-.188-.686-.335-1.28-.335-.593 0-.997.147-1.279.335-.285.19-.484.449-.622.726A2.832 2.832 0 0 0 5 6.565Z"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          fill="currentFill"
          d="M5 6.565v6.301l1.433-1.433a.625.625 0 1 1 .884.884l-2.5 2.5a.625.625 0 0 1-.884 0l-2.5-2.5a.625.625 0 1 1 .884-.884l1.433 1.433V6.561l.001-.05.006-.114a4.08 4.08 0 0 1 .41-1.52c.213-.426.542-.87 1.048-1.208.51-.34 1.16-.544 1.973-.544.812 0 1.463.205 1.972.544.506.337.835.782 1.047 1.208a4.083 4.083 0 0 1 .417 1.633l.001.046v6.879a2.828 2.828 0 0 0 .035.339c.038.223.11.51.25.79.14.278.338.536.623.726.282.188.686.335 1.28.335.593 0 .997-.147 1.279-.335.285-.19.484-.448.622-.726A2.833 2.833 0 0 0 15 13.448V6.51l-1.433 1.433a.625.625 0 1 1-.884-.884l2.5-2.5a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.884L16.25 6.509v6.93l-.001.05a4.061 4.061 0 0 1-.051.49 4.08 4.08 0 0 1-.365 1.144c-.213.426-.543.87-1.048 1.208-.51.34-1.16.544-1.973.544-.812 0-1.463-.205-1.972-.544a3.093 3.093 0 0 1-1.047-1.208 4.081 4.081 0 0 1-.418-1.678v-6.88a2.83 2.83 0 0 0-.035-.339 2.832 2.832 0 0 0-.25-.79 1.844 1.844 0 0 0-.623-.727c-.282-.187-.686-.334-1.28-.334-.593 0-.997.147-1.279.334-.285.19-.484.45-.622.727A2.832 2.832 0 0 0 5 6.565Z"
        />
      ),
    }),
  },
});