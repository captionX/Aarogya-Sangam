export interface Patient {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    medicalHistory: string[];
}

export interface Appointment {
    id: string;
    patientId: string;
    doctorId: string;
    dateTime: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    type: 'regular' | 'emergency';
    queueNumber?: number;
}

export interface Doctor {
    id: string;
    name: string;
    specialization: string;
    availability: {
        day: string;
        slots: string[];
    }[];
}
