import Link from 'next/link';

export default function PokemonCard({ name, url, imageUrl }) {
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Link href={`/pokemon/${name}`}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s'
      }}>
        <div style={{
          position: 'relative',
          height: '8rem',
          width: '100%',
          marginBottom: '1rem',
          backgroundColor: '#f3f4f6',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={imageUrl}
            alt={pokemonName}
            style={{ objectFit: 'contain', height: '100%', width: '100%' }}
          />
        </div>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
          color: '#1f2937',
          textAlign: 'center'
        }}>{pokemonName}</h2>
        <p style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          textAlign: 'center',
          marginTop: '0.25rem'
        }}>#{url.split('/').filter(Boolean).pop()}</p>
      </div>
    </Link>
  );
}
