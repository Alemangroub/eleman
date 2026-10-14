import React, { useState } from 'react';

const AssignSupervisor = ({ projectId, supervisors, currentSupervisorId }) => {
    const [selectedSupervisor, setSelectedSupervisor] = useState(currentSupervisorId || '');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const availableSupervisors = supervisors.filter(s => s.id !== currentSupervisorId);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);
        setError(null);

        if (!selectedSupervisor) {
            setError("Please select a supervisor.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/assign-supervisor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ projectId, supervisorId: selectedSupervisor }),
            });

            const result = await response.json();

            if (!response.ok) {
                // Use the detailed error from the server response if available
                throw new Error(result.error || result.message || 'An unknown error occurred.');
            }
            
            setMessage(result.message);
            // Optional: force a page reload to see the change immediately
            window.location.reload();

        } catch (err) {
            // Display the specific error message to the user
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>تعيين مشرف جديد</h3>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="supervisor-select" style={styles.label}>اختر مشرفًا:</label>
                    <select
                        id="supervisor-select"
                        value={selectedSupervisor}
                        onChange={(e) => setSelectedSupervisor(e.target.value)}
                        style={styles.select}
                        disabled={isLoading}
                    >
                        <option value="">-- اختر مشرفًا --</option>
                        {availableSupervisors.map((supervisor) => (
                            <option key={supervisor.id} value={supervisor.id}>
                                {supervisor.name} ({supervisor.email})
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" style={styles.button} disabled={isLoading}>
                    {isLoading ? 'جاري التعيين...' : 'تعيين مشرف'}
                </button>
            </form>
            {message && <p style={styles.successMessage}>{message}</p>}
            {error && <p style={styles.errorMessage}>Error: {error}</p>} 
        </div>
    );
};

const styles = {
    container: { /* ... styles ... */ },
    title: { /* ... styles ... */ },
    formGroup: { /* ... styles ... */ },
    label: { /* ... styles ... */ },
    select: { /* ... styles ... */ },
    button: { /* ... styles ... */ },
    successMessage: {
        color: 'green',
        marginTop: '10px',
    },
    errorMessage: {
        color: 'red',
        marginTop: '10px',
        fontWeight: 'bold',
    },
};

export default AssignSupervisor;
