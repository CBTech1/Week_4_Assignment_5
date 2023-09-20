import Head from 'next/head';
import Link from 'next/link';

export default function Conception( {children, maison} ){
  return(
    <div>
      <Head>
        <title>Mon Application</title>
      </Head>
      <header>
        <nav> 
          <a href="https://cat-bounce.com/">Check out this enjoyable cat site</a>
        </nav>        
      </header>
      <main>
        {children}
      </main>
      {!maison && (
        <Link href="/" className="btn btn-primary mt-3">
        ⇦ Back to maison
        </Link>
       )
      }
      <footer>
        <h1>Huge Footer</h1>
      </footer>
    </div>
  );
}