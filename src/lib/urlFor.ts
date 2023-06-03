import { client } from "./sanityClient"
import ImageUrlBuilder from "@sanity/image-url";


const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

export default urlFor;