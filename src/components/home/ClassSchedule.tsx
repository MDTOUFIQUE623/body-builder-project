import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../layout/Section';

interface ClassSession {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  capacity: number;
  spotsLeft: number;
}

const weeklySchedule: Record<string, ClassSession[]> = {
  Monday: [
    {
      id: 'mon-1',
      name: 'HIIT',
      trainer: 'Mike Thompson',
      time: '07:00',
      duration: '45min',
      capacity: 20,
      spotsLeft: 8
    },
    // Add more sessions
  ],
  // Add more days
};

export function ClassSchedule() {
  const [selectedDay, setSelectedDay] = React.useState('Monday');
  const [bookingClass, setBookingClass] = React.useState<string | null>(null);

  const handleBookClass = (classId: string) => {
    setBookingClass(classId);
    // Implement booking logic
  };

  return (
    <Section
      id="schedule"
      title="Class Schedule"
      subtitle="Book your spot in our exciting fitness classes"
      className="bg-white dark:bg-gray-900"
    >
      {/* Day selector */}
      <div className="flex space-x-2 mb-8 overflow-x-auto">
        {Object.keys(weeklySchedule).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg ${
              selectedDay === day
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule grid */}
      <div className="grid gap-4">
        {weeklySchedule[selectedDay]?.map((session) => (
          <motion.div
            key={session.id}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg dark:text-white">{session.name}</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-1">
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {session.time} ({session.duration})
                </p>
                <p>with {session.trainer}</p>
                <p>{session.spotsLeft} spots left</p>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleBookClass(session.id)}
              disabled={session.spotsLeft === 0}
            >
              {session.spotsLeft === 0 ? 'Full' : 'Book Now'}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
} 