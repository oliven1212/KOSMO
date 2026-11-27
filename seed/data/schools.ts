// data/schools.ts – to skoler
import type { School } from '@/types/databaseTypes'; // importér typen

export const schools: School[] = [
    { id: 'school_sondermark', name: 'Søndermarkskolen', emailSuffix: '@sondermark.test.dk' }, // bruger klassenavne med A/B/C
    { id: 'school_elmelund', name: 'Elmelundskolen', emailSuffix: '@elmelund.test.dk' }, // bruger klassenavne med X/Y/Z
];
