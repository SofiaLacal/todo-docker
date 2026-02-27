// Se ejecuta automáticamente en el primer arranque del contenedor MongoDB
// Solo corre cuando el volumen está vacío

db = db.getSiblingDB('to-do-list');

// Tareas de ejemplo
db.tareas.insertMany([
    {
        titulo: 'Tarea de ejemplo',
        descripcion: 'Descripción de la tarea',
        prioridad: 'media',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Revisar documentación',
        descripcion: 'Revisar la documentación del proyecto',
        prioridad: 'alta',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Compras de ejemplo
db.compras.insertMany([
    {
        titulo: 'Leche',
        descripcion: 'Leche entera',
        precio: 1.20,
        cantidad: 2,
        categoria: 'alimentación',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Pan',
        descripcion: 'Pan integral',
        precio: 0.85,
        cantidad: 1,
        categoria: 'alimentación',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Citas médicas de ejemplo
db.citamedicas.insertMany([
    {
        titulo: 'Revisión anual',
        doctor: 'Dr. García',
        especialidad: 'Medicina General',
        fecha: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // en 7 días
        lugar: 'Centro de Salud',
        notas: 'Traer analíticas',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

print('Datos iniciales insertados correctamente');
