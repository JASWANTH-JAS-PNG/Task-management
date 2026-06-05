import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { tasksAPI } from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: '',
    page: 1,
    limit: 10,
  });
  const [pagination, setPagination] = useState({ total: 0, pages: 1 });
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await tasksAPI.getAll(filters);
      if (data.success) {
        setTasks(data.tasks);
        setPagination(data.pagination);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch tasks');
    }
    setLoading(false);
  }, [filters]);

  // Fetch tasks
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = async (taskData) => {
    try {
      const data = await tasksAPI.create(
        taskData.title,
        taskData.description,
        taskData.priority
      );
      if (data.success) {
        setShowForm(false);
        fetchTasks();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const data = await tasksAPI.update(editingTask._id, taskData);
      if (data.success) {
        setEditingTask(null);
        setShowForm(false);
        fetchTasks();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        const data = await tasksAPI.delete(id);
        if (data.success) {
          fetchTasks();
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const data = await tasksAPI.toggleStatus(id);
      if (data.success) {
        fetchTasks();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to toggle task status');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters, page: 1 }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1>Task Manager</h1>
          <p>Welcome, {user?.name}!</p>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <main className={styles.main}>
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.controls}>
          <button
            onClick={() => {
              setEditingTask(null);
              setShowForm(!showForm);
            }}
            className={styles.addBtn}
          >
            {showForm ? 'Cancel' : '+ Add New Task'}
          </button>
        </div>

        {showForm && (
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
            initialData={editingTask}
            isEditing={!!editingTask}
          />
        )}

        <TaskFilter filters={filters} onFilterChange={handleFilterChange} />

        {loading ? (
          <div className={styles.loading}>Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className={styles.empty}>No tasks found. Create one to get started!</div>
        ) : (
          <>
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggleStatus={handleToggleStatus}
              onEdit={handleEditTask}
            />

            {pagination.pages > 1 && (
              <div className={styles.pagination}>
                <button
                  disabled={filters.page === 1}
                  onClick={() => handlePageChange(filters.page - 1)}
                >
                  Previous
                </button>
                <span>
                  Page {filters.page} of {pagination.pages}
                </span>
                <button
                  disabled={filters.page === pagination.pages}
                  onClick={() => handlePageChange(filters.page + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
