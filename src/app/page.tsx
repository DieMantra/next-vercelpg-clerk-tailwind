import { sql } from '@vercel/postgres';

export default function Home() {
	return (
		<main className='flex flex-col items-center'>
			<Pets />
		</main>
	);
}

async function Pets() {
	const pets = await sql`SELECT * FROM Pets`;
	return (
		<main className='flex flex-col items-center'>
			{pets.rows.map((pet) => {
				return (
					<>
						<div key={pet.id} className='max-w-screen-md'>
							{JSON.stringify(pet, null, 2)}
						</div>
					</>
				);
			})}
		</main>
	);
}
