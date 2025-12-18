import RoomDetails from "@/components/room-details";
import { Room, rooms } from "@/data/mock";

export const message = 'Hello! I would like to enquire about your apartments.';
export const phone = "+2349069987349";

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