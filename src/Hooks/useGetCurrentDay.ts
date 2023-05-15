export function useGetCurrentDay() {
  const date = new Date();
  const currentDay = date.getDay() - 1;
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  return { currentDay, days };
}

export default useGetCurrentDay;
