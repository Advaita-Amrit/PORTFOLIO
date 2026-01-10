import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Download Kali Linux OVA - Advaita Amrit',
	description: 'Download Kali Linux OVA file ready pre-configured for VirtualBox with 2GB RAM and 90GB storage.',
};

export default function KaliPage() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="text-center max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold mb-8">Download Kali Linux OVA</h1>
				<p className="text-lg mb-8">
					Download the pre-configured Kali Linux OVA file for VirtualBox with 2GB RAM and 90GB storage.
				</p>
				<a
					href="/files/kali-linux-ova.ova"
					download
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Download OVA
				</a>
			</div>
		</div>
	);
}
