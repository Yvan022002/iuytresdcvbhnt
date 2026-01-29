interface LogEntry {
  id: number
  title: string
  description: string
  date: string
  author: string
}

function ChangeLog() {
  const logs: LogEntry[] = [
    {
      id: 1,
      title: 'Création du blog',
      description: 'Initialisation du projet avec Vite et React',
      date: new Date().toLocaleDateString('fr-FR'),
      author: 'Yvan Nguetsop Donfack'
    },
    {
      id: 2,
      title: 'Ajout du Header et Footer',
      description: 'Mise en place de la structure de base avec navigation',
      date: new Date().toLocaleDateString('fr-FR'),
      author: 'Yvan Nguetsop Donfack'
    }
  ]

  return (
    <section className="changelog-section">
      <h3>Journal des modifications</h3>
      
      <table className="changelog-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Auteur</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.date}</td>
              <td className="title-cell">{log.title}</td>
              <td>{log.description}</td>
              <td>{log.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ChangeLog
