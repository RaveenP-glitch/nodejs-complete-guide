import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  return (
    <ul>
      {
      props.products.map((product) => {
        <li>{product.title}</li>
      })}
    </ul>
  );
}

export default HomePage;

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); //looks inside the whole directory, not only the pages directory.
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log(data);

  return { 
    props: {
      products: data.products
    },
    revalidate: 10
  }
} 