
interface Task {
	id: number;
	text: string;
	done: boolean;
}

// type Actions = 'added' | 'changed' | 'deleted';

type AddTask = { type: "added", id: number; text: string }
type ChangeTask = { type: "changed", task: Task }
type DeleteTask = { type: "deleted", id: number }

// type Action = {
//   type: Actions;
// } & (
//   | AddTask
//   | ChangeTask
//   | DeleteTask
// );

type ReducerActionType = AddTask | ChangeTask | DeleteTask

export default function tasksReducer(tasks: Task[], action: ReducerActionType) {
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
