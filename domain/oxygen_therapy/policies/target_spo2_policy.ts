function canIncrementTargetSpO2(max: number, patientCategory: number, value: number): boolean {
  return !!(patientCategory === 1 && value <= max);
}

export default canIncrementTargetSpO2;
