import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link key={index} href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-black dark:text-color-primary hover:text-color-aqua dark:hover:text-color-darkcyan transition-all cards">
                        <Image 
                            src={anime.images.webp.image_url} 
                            alt="animeImages" 
                            width={350} 
                            height={350} 
                            className="w-full max-h-80 object-cover" 
                            priority={true}
                        />
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList
