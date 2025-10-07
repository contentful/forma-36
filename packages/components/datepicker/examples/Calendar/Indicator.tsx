import React, { useState } from 'react';
import { Calendar } from '@contentful/f36-components';
import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export default function IndicatorExample() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const daysWithSchedule = [yesterday, tomorrow];
  const [selectedDay, setSelectedDay] = useState(today);

  const styles = {
    daysWithSchedule: css({
      '&::before': {
        content: '""',
        width: tokens.spacingS,
        height: tokens.spacing2Xs,
        borderRadius: tokens.borderRadiusSmall,
        backgroundColor: tokens.green400,
        position: 'absolute',
        bottom: '11%',
        left: '50%',
        transform: 'translate(-50%, -11%)',
      },
    }),
  };

  return (
    <Calendar
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      modifiers={{
        scheduled: daysWithSchedule,
      }}
      modifiersClassNames={{
        scheduled: styles.daysWithSchedule,
      }}
    />
  );
}
