export interface Task {
  imageUrl: string;
  story: string;
  subTasks: { text: string; xp : number }[];
  title: string;
}
