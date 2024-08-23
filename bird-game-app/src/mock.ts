export interface BirdData {
  id: number;
  bird: string;
  progress: number;
}

const mockBirdData: BirdData[] = [
  { id: 1, bird: 'red', progress: 75 },
  { id: 2, bird: 'green', progress: 50 },
  { id: 3, bird: 'blue', progress: 30 },
  { id: 4, bird: 'yellow', progress: 100 },
  { id: 5, bird: 'purple', progress: 20 },
  { id: 6, bird: 'brown', progress: 60 },
];

export default mockBirdData;