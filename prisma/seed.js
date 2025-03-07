const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    try {
        // Create Technology Stacks
        const technologies = [
            { name: 'React' },
            { name: 'Node.js' },
            { name: 'Python' },
            { name: 'TypeScript' },
            { name: 'Next.js' },
            { name: 'PostgreSQL' },
            { name: 'Prisma' },
            { name: 'TailwindCSS' },
            { name: 'Docker' },
            { name: 'AWS' }
        ];

        for (const tech of technologies) {
            await prisma.technologyStack.upsert({
                where: { id: technologies.indexOf(tech) + 1 },
                update: {},
                create: {
                    name: tech.name
                }
            });
        }

        console.log('Technology stacks created successfully');

        // Create Users
        const users = [
            {
                id: 'user1',
                name: '山田 太郎',
                email: 'taro@example.com',
                emailVerified: new Date(),
                image: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            {
                id: 'user2',
                name: '佐藤 花子',
                email: 'hanako@example.com',
                emailVerified: new Date(),
                image: 'https://randomuser.me/api/portraits/women/1.jpg',
            },
            {
                id: 'user3',
                name: '鈴木 一郎',
                email: 'ichiro@example.com',
                emailVerified: new Date(),
                image: 'https://randomuser.me/api/portraits/men/2.jpg',
            },
            {
                id: 'user4',
                name: '田中 直樹',
                email: 'naoki@example.com',
                emailVerified: new Date(),
                image: 'https://randomuser.me/api/portraits/men/3.jpg',
            },
            {
                id: 'user5',
                name: '伊藤 美咲',
                email: 'misaki@example.com',
                emailVerified: new Date(),
                image: 'https://randomuser.me/api/portraits/women/2.jpg',
            }
        ];

        for (const user of users) {
            await prisma.user.upsert({
                where: { id: user.id },
                update: {},
                create: user
            });
        }

        console.log('Users created successfully');

        // Create UserData
        const userData = [
            {
                userId: 'user1',
                affiliation: '東京科学大学',
                profile: 'React と TypeScript が得意です。'
            },
            {
                userId: 'user2',
                affiliation: '九州工業大学',
                profile: 'コンピュータサイエンス専攻。AI と機械学習に興味あり。'
            },
            {
                userId: 'user3',
                affiliation: '東京科学大学',
                profile: 'Python と AWS が得意。'
            },
            {
                userId: 'user4',
                affiliation: '九州工業大学',
                profile: 'Flutterが好きです。'
            },
            {
                userId: 'user5',
                affiliation: '東京科学大学',
                profile: 'UX/UI デザインが得意です。'
            }
        ];

        for (const data of userData) {
            await prisma.userData.upsert({
                where: { userId: data.userId },
                update: {},
                create: data
            });
        }

        console.log('User data created successfully');

        // Create User Technology Stack
        const userTechStacks = [
            { userId: 'user1', technologyStackId: 1, level: 5 }, // React
            { userId: 'user1', technologyStackId: 4, level: 4 }, // TypeScript
            { userId: 'user1', technologyStackId: 5, level: 4 }, // Next.js
            { userId: 'user1', technologyStackId: 8, level: 3 }, // TailwindCSS
            { userId: 'user2', technologyStackId: 3, level: 4 }, // Python
            { userId: 'user2', technologyStackId: 6, level: 3 }, // PostgreSQL
            { userId: 'user3', technologyStackId: 2, level: 5 }, // Node.js
            { userId: 'user3', technologyStackId: 3, level: 4 }, // Python
            { userId: 'user3', technologyStackId: 10, level: 4 }, // AWS
            { userId: 'user4', technologyStackId: 1, level: 4 }, // React
            { userId: 'user4', technologyStackId: 2, level: 4 }, // Node.js
            { userId: 'user4', technologyStackId: 4, level: 3 }, // TypeScript
            { userId: 'user4', technologyStackId: 7, level: 3 }, // Prisma
            { userId: 'user4', technologyStackId: 9, level: 3 }, // Docker
            { userId: 'user5', technologyStackId: 1, level: 3 }, // React
            { userId: 'user5', technologyStackId: 8, level: 5 }, // TailwindCSS
        ];

        for (const techStack of userTechStacks) {
            await prisma.userTechnologyStack.upsert({
                where: {
                    userId_technologyStackId: {
                        userId: techStack.userId,
                        technologyStackId: techStack.technologyStackId
                    }
                },
                update: {},
                create: techStack
            });
        }

        console.log('User technology stacks created successfully');

        // Create Hackathons
        const hackathons = [
            {
                id: 1,
                name: '3月のハッカソン',
                theme: '拡散',
                startDate: new Date('2025-03-01'),
                endDate: new Date('2025-03-21')
            },
            {
                id: 2,
                name: '2月のハッカソン',
                theme: 'ぐるぐる',
                startDate: new Date('2025-02-01'),
                endDate: new Date('2025-02-17')
            },
            {
                id: 3,
                name: '新年のハッカソン',
                theme: 'おせち',
                startDate: new Date('2025-01-01'),
                endDate: new Date('2025-01-03')
            }
        ];

        for (const hackathon of hackathons) {
            await prisma.hackathon.upsert({
                where: { id: hackathon.id },
                update: {},
                create: hackathon
            });
        }

        console.log('Hackathons created successfully');

        // Create Prizes
        const prizes = [
            {
                hackathonId: 1,
                name: '最優秀賞',
                description: '賞金50万円と企業からのインターンシップ機会'
            },
            {
                hackathonId: 1,
                name: '技術革新賞',
                description: '賞金20万円と開発サポート'
            },
            {
                hackathonId: 1,
                name: 'デザイン賞',
                description: 'デザインツールのライセンスと賞金10万円'
            },
            {
                hackathonId: 2,
                name: '最優秀賞',
                description: '賞金40万円とヘルスケア企業とのパートナーシップ機会'
            },
            {
                hackathonId: 2,
                name: 'アクセシビリティ賞',
                description: '賞金15万円と製品開発サポート'
            },
            {
                hackathonId: 3,
                name: '最優秀賞',
                description: '賞金60万円と自治体との実証実験機会'
            },
            {
                hackathonId: 3,
                name: '持続可能性賞',
                description: '賞金25万円'
            }
        ];

        for (const prize of prizes) {
            await prisma.prize.create({
                data: prize
            });
        }

        console.log('Prizes created successfully');

        // Create Teams
        const teams = [
            {
                id: 1,
                hackathonId: 1,
                name: 'エコソリューションズ'
            },
            {
                id: 2,
                hackathonId: 1,
                name: 'グリーンテック'
            },
            {
                id: 3,
                hackathonId: 2,
                name: 'ヘルスコネクト'
            },
            {
                id: 4,
                hackathonId: 3,
                name: 'スマートテック'
            },
            {
                id: 5,
                hackathonId: 3,
                name: 'アーバンテック'
            }
        ];

        for (const team of teams) {
            await prisma.team.upsert({
                where: { id: team.id },
                update: {},
                create: team
            });
        }

        console.log('Teams created successfully');

        // Create Team Members
        const teamMembers = [
            { userId: 'user1', hackathonId: 1, teamId: 1 },
            { userId: 'user2', hackathonId: 1, teamId: 1 },
            { userId: 'user3', hackathonId: 1, teamId: 2 },
            { userId: 'user4', hackathonId: 1, teamId: 2 },
            { userId: 'user5', hackathonId: 1, teamId: 2 },
            { userId: 'user1', hackathonId: 2, teamId: 3 },
            { userId: 'user3', hackathonId: 2, teamId: 3 },
            { userId: 'user5', hackathonId: 2, teamId: 3 },
            { userId: 'user2', hackathonId: 3, teamId: 4 },
            { userId: 'user4', hackathonId: 3, teamId: 4 },
            { userId: 'user1', hackathonId: 3, teamId: 5 },
            { userId: 'user3', hackathonId: 3, teamId: 5 },
            { userId: 'user5', hackathonId: 3, teamId: 5 }
        ];

        for (const member of teamMembers) {
            await prisma.teamMember.upsert({
                where: {
                    userId_hackathonId: {
                        userId: member.userId,
                        hackathonId: member.hackathonId
                    }
                },
                update: {},
                create: member
            });
        }

        console.log('Team members created successfully');

        // Create Products
        const products = [
            {
                id: 1,
                teamId: 1,
                title: 'EcoTracker',
                description: '個人の二酸化炭素排出量を追跡して削減するためのアプリ。日常の行動から排出量を計算し、環境に優しい代替案を提案します。'
            },
            {
                id: 2,
                teamId: 2,
                title: 'SmartWaste',
                description: 'IoTセンサーを用いたスマートゴミ箱システム。ゴミの種類を自動分別し、収集ルートの最適化を行うアプリケーション。'
            },
            {
                id: 3,
                teamId: 3,
                title: 'MedConnect',
                description: '患者と医師をつなぐテレヘルスプラットフォーム。予約管理、ビデオ相談、処方箋管理機能を提供します。'
            },
            {
                id: 4,
                teamId: 4,
                title: 'CityPulse',
                description: '都市の交通量、大気質、騒音レベルなどをリアルタイムで可視化するダッシュボード。公共交通機関の最適ルートも提案します。'
            },
            {
                id: 5,
                teamId: 5,
                title: 'SafeStreets',
                description: '地域の安全を向上させるためのコミュニティ主導型アプリ。事件報告、防犯情報の共有、緊急連絡網機能を搭載。'
            }
        ];

        for (const product of products) {
            await prisma.product.upsert({
                where: { id: product.id },
                update: {},
                create: product
            });
        }

        console.log('Products created successfully');

        // Create Questions
        const questions = [
            {
                id: 1,
                productId: 1,
                text: 'このアプリは個人の位置情報をどのように扱いますか？'
            },
            {
                id: 2,
                productId: 1,
                text: '二酸化炭素排出量の計算方法について詳しく教えてください。'
            },
            {
                id: 3,
                productId: 2,
                text: 'どのようなIoTセンサーを使用していますか？'
            },
            {
                id: 4,
                productId: 3,
                text: '医療データのセキュリティ対策はどうなっていますか？'
            },
            {
                id: 5,
                productId: 4,
                text: 'オフラインでも利用できますか？'
            },
            {
                id: 6,
                productId: 5,
                text: '報告された情報の信頼性はどのように確保していますか？'
            }
        ];

        for (const question of questions) {
            await prisma.question.upsert({
                where: { id: question.id },
                update: {},
                create: question
            });
        }

        // Create replies
        const replies = [
            {
                id: 7,
                productId: 1,
                text: '位置情報はユーザーの端末でのみ処理され、サーバーには保存されません。移動手段の検出にのみ使用します。',
                replyId: 1
            },
            {
                id: 8,
                productId: 2,
                text: '重さを測定する圧力センサーと、AIカメラを使用してゴミの種類を識別します。',
                replyId: 3
            },
            {
                id: 9,
                productId: 3,
                text: 'HIPAA準拠の暗号化を使用し、すべてのデータは匿名化して保存されます。アクセスには二要素認証が必要です。',
                replyId: 4
            },
            {
                id: 10,
                productId: 5,
                text: 'コミュニティの評価システムと専門モデレーターによる確認プロセスを導入しています。複数の報告元からの検証も行います。',
                replyId: 6
            }
        ];

        for (const reply of replies) {
            await prisma.question.upsert({
                where: { id: reply.id },
                update: {},
                create: reply
            });
        }

        console.log('Questions and replies created successfully');

        // Create Evaluations
        const evaluations = [
            { userId: 'user1', hackathonId: 1, productId: 2 },
            { userId: 'user2', hackathonId: 1, productId: 1 },
            { userId: 'user3', hackathonId: 1, productId: 1 },
            { userId: 'user4', hackathonId: 1, productId: 1 },
            { userId: 'user5', hackathonId: 1, productId: 1 },
            { userId: 'user2', hackathonId: 2, productId: 3 },
            { userId: 'user4', hackathonId: 2, productId: 3 },
            { userId: 'user2', hackathonId: 3, productId: 5 },
            { userId: 'user3', hackathonId: 3, productId: 4 },
            { userId: 'user4', hackathonId: 3, productId: 5 }
        ];

        for (const evaluation of evaluations) {
            await prisma.evaluation.upsert({
                where: {
                    userId_hackathonId_productId: {
                        userId: evaluation.userId,
                        hackathonId: evaluation.hackathonId,
                        productId: evaluation.productId
                    }
                },
                update: {},
                create: evaluation
            });
        }

        console.log('Evaluations created successfully');

    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
