import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addNewContact } from "@/services/contact";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularLoading } from "@/components/Loading";
import { useAppStore } from "@/store/app";

const formSchema = z.object({
  name: z.string().min(1, "Nome não pode ser vazio"),
  email: z.string().min(1, "Email não pode ser vazio"),
  message: z.string().min(1, "Mensagem não pode ser vazia"),
});

type FormProps = z.infer<typeof formSchema>;

const Main = () => {
  const t = useTranslations("Index");
  const { setActiveMenu } = useAppStore();

  const { register, handleSubmit, reset } = useForm<FormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormProps) => {
    setLoading(true);
    const res = await addNewContact(data);

    reset({ name: "", email: "", message: "" });

    setLoading(false);
    if (res?.id) {
      return alert(t("formSubmissionAlert"));
    }
    return alert(t("formSubmissionError"));
  };

  const sectionsRef = useRef<HTMLElement[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sectionsRef.current = Array.from(sections) as HTMLElement[];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "";

      sectionsRef.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      // Atualiza o hash da URL apenas se a seção mudou
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        window.history.replaceState(null, "", `#${currentSection}`);
        setActiveMenu(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, setActiveMenu]);

  useEffect(() => {
    if (location.hash) {
      window.location.replace(location.href);
    }
  }, []);

  return (
    <main className="flex-1 mt-14">
      <section
        id="home"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                {t("hero.title")}
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="space-x-4">
              <Link href="#projects" slot="button">
                <Button variant="secondary">{t("hero.cta.projects")}</Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="bg-white text-purple-500 hover:bg-gray-100 hover:text-purple-300"
                >
                  {t("hero.cta.contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            {t("about.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                {t("about.content1")}
              </p>
              <p className="text-xl text-muted-foreground">
                {t("about.content2")}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://avatars.githubusercontent.com/u/34161002?v=4"
                alt="Douglas Walas"
                width={300}
                height={300}
                className="rounded-full border-slate-400 border-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            {t("skills.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("skills.frontend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Styled Components",
                    "Zustand",
                    "Redux",
                    "GraphQL",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("skills.backend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "NestJs",
                    "Express",
                    "PostgreSQL",
                    "MongoDB",
                    "REST",
                    "GraphQL",
                    "Docker",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("skills.mobile")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Expo",
                    "Maps",
                    "Notifications",
                    "Firebase",
                    "Flutter",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {t("skills.devops")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Docker",
                    "Kubernets",
                    "AWS",
                    "GCP",
                    "Azure Devops",
                    "Lambda",
                    "S3",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 h-full flex flex-col justify-around">
                <h3 className="text-xl font-bold mb-2">
                  {t("projects.projects-infos.app-ideas.name")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.projects-infos.app-ideas.desc")}
                </p>
                <Link
                  href={t("projects.projects-infos.app-ideas.link")}
                  target="__blank"
                >
                  <Button variant="outline">{t("projects.cta")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 h-full flex flex-col justify-around">
                <h3 className="text-xl font-bold mb-2">
                  {t("projects.projects-infos.ominix.name")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.projects-infos.ominix.desc")}
                </p>
                <Link
                  href={t("projects.projects-infos.ominix.link")}
                  target="__blank"
                >
                  <Button variant="outline">{t("projects.cta")}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            {t("contact.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{t("contact.info")}</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <Link
                      href="mailto://douglas.skd@gmail.com"
                      className="hover:underline"
                    >
                      douglas.skd@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />

                    <Link
                      href="https://github.com/DWRP"
                      className="hover:underline"
                      target="__blank"
                    >
                      github.com/DWRP
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    <Link
                      href="https://linkedin.com/in/douglas-pardim"
                      className="hover:underline"
                      target="__blank"
                    >
                      linkedin.com/in/douglas-pardim
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    placeholder={t("contact.form.name")}
                    required
                    {...register("name")}
                    disabled={loading}
                  />
                  <Input
                    type="email"
                    placeholder={t("contact.form.email")}
                    required
                    {...register("email")}
                    disabled={loading}
                  />
                  <Textarea
                    placeholder={t("contact.form.message")}
                    required
                    {...register("message")}
                    disabled={loading}
                  />
                  <Button type="submit" className="w-full">
                    {loading ? (
                      <CircularLoading />
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
