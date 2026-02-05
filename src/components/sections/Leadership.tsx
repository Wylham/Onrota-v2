import React from "react";
import { Container } from "../ui/Base";

const TEAM = [
  {
    name: "Evelyn Martins",
    role: "CEO & Founder",
    bio: "Especialista em gestão de risco e logística, lidera a inovação no setor de transportes com foco em segurança, tecnologia e eficiência.",
    initials: "EM",
  },
];

export const Leadership: React.FC = () => {
  return (
    <section id="lideranca" className="py-16 sm:py-20 bg-dark">
      <Container className="space-y-8">
        <div>
          <p className="text-base text-gray-400">Pessoas</p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">
            Conheça nossa liderança
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-semibold">
                  {member.initials}
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-white">
                    {member.name}
                  </p>
                  <p className="text-base text-brand-primary">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
