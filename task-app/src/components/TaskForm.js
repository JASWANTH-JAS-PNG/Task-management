import React, { useState, useEffect } from 'react';
import styles from '../styles/TaskForm.module.css';

const TaskForm = ({ onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description || '',
        priority: initialData.priority || 'medium',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }
    onSubmit(formData);
    setFormData({ title: '', description: '', priority: 'medium' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Task Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          minLength="3"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter task description (optional)"
          rows="4"
        ></textarea>
      </div>

      <div className={styles.formGroup}>
        <label>Priority</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        {isEditing ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
