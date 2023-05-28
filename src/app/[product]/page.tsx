// import { client } from "@/lib/sanityClient";

// const getProductData = async ({slug}:any) => {
//   const res = await client.fetch(`*[_type == "product  && $slug in categories[]->slug.current"]`);
//   const posts = await client.fetch(res, { slug });

//   // console.log("ARTICLE BY CATEGORY", posts);

//   return posts;
// };



interface Props {
    params:{
        product: 'string'
    }
}

export default async function Home({params}: Props) {
    //   const data = await getProductData();
    //   console.log("Config", data);
    
      return (
        <main className="">
          male
        </main>
      );
    }
    