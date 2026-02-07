import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const services = [
        {
            name: "Harmonização Facial",
            description: "Realce seus traços naturais com procedimentos minimamente invasivos.",
            price: 1200.00,
            duration: 60
        },
        {
            name: "Limpeza de Pele Profunda",
            description: "Renove sua pele removendo impurezas e células mortas.",
            price: 180.00,
            duration: 60
        },
        {
            name: "Microagulhamento",
            description: "Estimule o colágeno para tratar cicatrizes e rejuvenescer.",
            price: 350.00,
            duration: 45
        },
        {
            name: "Lipo Enzimática",
            description: "Reduza medidas de forma eficaz com enzimas potentes.",
            price: 250.00,
            duration: 30
        },
        {
            name: "Botox (Toxina Botulínica)",
            description: "Suavize rugas e linhas de expressão.",
            price: 900.00,
            duration: 30
        }
    ]

    for (const service of services) {
        await prisma.service.create({
            data: service,
        })
    }

    console.log('Services seeded!')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
