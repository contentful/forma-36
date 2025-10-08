import React, { useState } from 'react';
import { Calendar, DayContent } from '@contentful/f36-components';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export default function CustomDayContentExample() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const daysWithSchedule = [yesterday, tomorrow];
  const [selectedDay, setSelectedDay] = useState(today);

  const CustomDayContent = ({ date, displayMonth, activeModifiers }) => {
    const styles = {
      scheduleIndicator: css({
        width: tokens.spacingS,
        height: tokens.spacing2Xs,
        borderRadius: tokens.borderRadiusSmall,
        backgroundColor: tokens.green400,
        position: 'absolute',
        bottom: '11%',
        left: '50%',
        transform: 'translate(-50%, -11%)',
      }),
    };

    return (
      <>
        <DayContent
          date={date}
          displayMonth={displayMonth}
          activeModifiers={activeModifiers}
        />
        {activeModifiers.scheduled && (
          <span
            className={styles.scheduleIndicator}
            data-test-id={`schedule-indicator`}
          />
        )}
      </>
    );
  };

  return (
    <Calendar
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      components={{ DayContent: CustomDayContent }}
      modifiers={{ scheduled: daysWithSchedule }}
    />
  );
}
