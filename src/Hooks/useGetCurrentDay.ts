export function useGetCurrentDay() {
  const date = new Date();
  let currentDay = date.getDay() - 1;

  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return { currentDay, days };
}

export default useGetCurrentDay;
