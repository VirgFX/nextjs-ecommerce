import Image from "next/image";
import {stripe} from "@/lib/stripe";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  const products = await stripe.products.list({
    expand:["data.default_price"],
    limit: 5,
  })

  console.log(products)
  return (
    <div>
      <section>
        <div>
          <div>
            <h2> Welcome to SHop.Now</h2>
            <p>All you need, we have it here!</p>
            <Button asChild variant="default" className='rounded-full px-4 py-2'>
              <Link href='/products' className="hover:text-blue-600">Browse All Products</Link>
            </Button>
          </div>
          <Image src={products.data[0].images[0]} alt='Banner Image' width={450} height={450} />
        </div>
      </section>
    </div>
  );
}