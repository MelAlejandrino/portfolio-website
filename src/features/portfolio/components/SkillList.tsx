import type { SkillGroup } from "../portfolio.types";

interface SkillListProps {
  groups: SkillGroup[];
}

export function SkillList({ groups }: SkillListProps) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-medium text-muted mb-2.5">
            {group.category}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="text-foreground leading-relaxed pl-3.5 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-primary/40"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
