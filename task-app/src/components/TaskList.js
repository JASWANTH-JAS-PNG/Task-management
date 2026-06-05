import React from 'react';
import styles from '../styles/TaskList.module.css';

const TaskList = ({ tasks, onDelete, onToggleStatus, onEdit }) => {
  const getPriorityClass = (priority) => {
    return styles[`priority-${priority}`] || '';
  };

  const getStatusIcon = (status) => {
    return status === 'completed' ? '✓' : '○';
  };

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <div
          key={task._id}
          className={`${styles.taskCard} ${task.status === 'completed' ? styles.completed : ''}`}
        >
          <div className={styles.taskHeader}>
            <div className={styles.taskTitle}>
              <button
                className={styles.statusBtn}
                onClick={() => onToggleStatus(task._id)}
                title="Toggle status"
              >
                {getStatusIcon(task.status)}
              </button>
              <h3>{task.title}</h3>
              <span className={`${styles.priority} ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </span>
            </div>
            <div className={styles.actions}>
              <button
                onClick={() => onEdit(task)}
                className={styles.editBtn}
                title="Edit task"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task._id)}
                className={styles.deleteBtn}
                title="Delete task"
              >
                Delete
              </button>
            </div>
          </div>

          {task.description && (
            <p className={styles.description}>{task.description}</p>
          )}

          <div className={styles.meta}>
            <span className={styles.status}>
              Status: <strong>{task.status}</strong>
            </span>
            <span className={styles.date}>
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
