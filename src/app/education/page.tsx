import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Advaita Amrit',
	description: 'Advaita Amrit\'s educational background including Bachelor of Engineering in Information Science & Engineering and Engineering from Bengal College of Engineering and Technology.',
};

export default function EducationPage() {
	return <Education />;
}