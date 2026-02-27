db = db.getSiblingDB('to-do-list');

//Tareas de ejemplo
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
    },
    {
        titulo: 'Limpiar el garaje',
        descripcion: 'Organizar herramientas',
        prioridad: 'media',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Llamar al banco',
        descripcion: 'Consultar movimientos sospechosos',
        prioridad: 'alta',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Preparar presentación',
        descripcion: 'Crear diapositivas y ensayar',
        prioridad: 'media',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

//Compras de ejemplo
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
    },
    {
        titulo: 'Pechuga de pollo',
        cantidad: 1,
        categoria: 'carnicería',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Manzanas Fuji',
        cantidad: 6,
        categoria: 'frutas',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

//Citas médicas de ejemplo
db.citamedicas.insertMany([
    {
        titulo: 'Revisión anual',
        doctor: 'Dr. García',
        especialidad: 'Medicina General',
        fecha: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        lugar: 'Centro de Salud',
        notas: 'Traer analíticas',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Dolor de rodilla derecha',
        doctor: 'Dr. Carlos Pérez',
        especialidad: 'Traumatología',
        fecha: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        lugar: 'Clínica San Rafael',
        notas: 'Posible resonancia',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Consulta dermatológica',
        doctor: 'Dra. Ana Ruiz',
        especialidad: 'Dermatología',
        fecha: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
        lugar: 'Hospital Central',
        notas: 'No usar cremas antes',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        titulo: 'Revisión dental',
        doctor: 'Dr. Javier Martín',
        especialidad: 'Odontología',
        fecha: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
        lugar: 'Clínica Dental Sonrisa',
        notas: 'Preguntar por blanqueamiento',
        completada: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

print('Datos iniciales insertados correctamente');