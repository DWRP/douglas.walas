import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Main = () => {
  const t = useTranslations("Index");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("formSubmissionAlert"));
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
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
                    "Express",
                    "PostgreSQL",
                    "MongoDB",
                    "RESTful APIs",
                    "Docker",
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
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("projects.ecommerce")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.ecommerce-desc")}
                </p>
                <Button variant="outline">{t("projects.cta")}</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("projects.taskmanager")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.taskmanager-desc")}
                </p>
                <Button variant="outline">{t("projects.cta")}</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {t("projects.blogcms")}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t("projects.blogcms-desc")}
                </p>
                <Button variant="outline">{t("projects.cta")}</Button>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder={t("contact.form.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder={t("contact.form.email")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message")}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {t("contact.form.submit")}
                    <Send className="ml-2 h-4 w-4" />
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
