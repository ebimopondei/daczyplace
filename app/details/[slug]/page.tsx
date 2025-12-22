import RoomDetails from "@/components/room-details";
import { Room, rooms } from "@/data/mock";

export default async function ApartmentDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}){

    const { slug } = await params
    const room = rooms.find((room) => room.slug === slug) as Room
    
    return (
        <RoomDetails room={room} />
    )
}