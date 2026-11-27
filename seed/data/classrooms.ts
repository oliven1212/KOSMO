// data/classrooms.ts – klasser fra 3. til 6. på to skoler (statiske data)
// isActive = true betyder, at en lærer har oprettet klassen i appen, så elevernes users findes
import type { Classroom } from '@/types/databaseTypes'; // importér typen

export const classrooms: Classroom[] = [
  // Søndermarkskolen (A/B/C)
  { id: "class_sondermark_3a", name: "3.A", isActive: true, schoolId: "school_sondermark" },
  { id: "class_sondermark_3b", name: "3.B", isActive: false, schoolId: "school_sondermark" },
  { id: "class_sondermark_4a", name: "4.A", isActive: false, schoolId: "school_sondermark" },
  { id: "class_sondermark_4b", name: "4.B", isActive: false, schoolId: "school_sondermark" },
  { id: "class_sondermark_5a", name: "5.A", isActive: false, schoolId: "school_sondermark" },
  { id: "class_sondermark_5c", name: "5.C", isActive: false, schoolId: "school_sondermark" },
  { id: "class_sondermark_6b", name: "6.B", isActive: false, schoolId: "school_sondermark" },
  // Elmelundskolen (X/Y/Z)
  { id: "class_elmelund_3x", name: "3.X", isActive: false, schoolId: "school_elmelund" },
  { id: "class_elmelund_4y", name: "4.Y", isActive: false, schoolId: "school_elmelund" },
  { id: "class_elmelund_4z", name: "4.Z", isActive: false, schoolId: "school_elmelund" },
  { id: "class_elmelund_5x", name: "5.X", isActive: true, schoolId: "school_elmelund" },
  { id: "class_elmelund_5y", name: "5.Y", isActive: false, schoolId: "school_elmelund" },
  { id: "class_elmelund_6x", name: "6.X", isActive: false, schoolId: "school_elmelund" },
  { id: "class_elmelund_6z", name: "6.Z", isActive: false, schoolId: "school_elmelund" },
];