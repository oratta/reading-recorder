import prisma from './prisma';

export async function getAllReviews() {
    return await prisma.reviews.findMany({
        orderBy: {
            read: 'desc'
        }
    });
}