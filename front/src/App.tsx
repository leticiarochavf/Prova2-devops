import { useEffect, useState } from 'react';
import './App.css';

interface Course {
  id: number;
  code: string;
  title: string;
  hours: number;
  modality: string;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/courses')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os cursos');
        }

        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Lista de Cursos</h1>

      {loading && <p>Carregando...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Título</th>
              <th>Carga Horária</th>
              <th>Modalidade</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.hours} h</td>
                <td>{course.modality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default App;