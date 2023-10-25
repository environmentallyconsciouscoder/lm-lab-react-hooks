
interface Task {
	id: number;
	text: string;
	done: boolean;
}

type Actions = 'added' | 'changed' | 'deleted';

type Action = {
  type: Actions;
} & (
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number }
);

export default function tasksReducer(tasks: Task[], action: Action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
    }
  }
