import { client } from "./sanityClient"
import ImageUrlBuilder from "@sanity/image-url";

// Personal discovered approah

const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

export default urlFor;