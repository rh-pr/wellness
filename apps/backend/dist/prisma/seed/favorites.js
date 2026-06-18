"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedFavorites = seedFavorites;
async function seedFavorites(prisma, users, contents) {
    await prisma.favorite.createMany({
        data: users.map((user, index) => ({
            userId: user.id,
            contentId: contents[index].id,
        })),
        skipDuplicates: true,
    });
}
//# sourceMappingURL=favorites.js.map