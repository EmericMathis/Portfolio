import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cog, User } from 'lucide-react';
import { TypographyP } from "../typography/TypographyP";
import AngularSeparator1 from "../svg/separators/AngularSeparator1";
import { BlurFade } from "../animation/BlurFade";

export default function HeroCards() {
    const activities = [
        {
            title: "Développement web",
            description: (
                <>
                    Conception et développement de sites web complets, du maquettage à la mise en ligne.<br />
                    Adaptation en version app mobile.
                </>
            ),
            icon: Code
        },
        {
            title: "Qui suis-je ?",
            description: "J'ai 33 ans, un parcours atypique de reconversion qui me donne des compétences diverses, comme la gestion de projet, le service client, et bien d'autres.",
            icon: User
        },
        {
            title: "DevOps",
            description: (
                <>
                    Configuration de serveurs avec Docker-compose, déploiement continu avec GitLab ou Vercel.<br />
                    Mise en place de solutions de gestion/organisation.
                </>
            ),
            icon: Cog
        }
    ];

    return (
        <section className="relative">
            <AngularSeparator1 flipVertical={true} className="lg:block absolute bottom-0 left-0 w-screen text-secondary -mb-px" />
            <div className="container mx-auto px-4 py-8 max-w-[65rem]">
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    {activities.map((activity, index) => (
                        <BlurFade delay={0.2 * index} key={index}>
                            <Card
                                className="group flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary lg:h-[20rem]"
                                role="region"
                            >
                                <CardHeader className="space-y-4">
                                    <activity.icon className="w-16 h-16 text-primary group-hover:text-secondary" aria-hidden="true" />
                                    <CardTitle id={`card-title-${index}`} className="text-xl lg:text-2xl inline text-nowrap group-hover:text-secondary">
                                        {activity.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <TypographyP className="group-hover:text-secondary">
                                        {activity.description}
                                    </TypographyP>
                                </CardContent>
                            </Card>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}