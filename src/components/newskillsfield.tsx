import { useState } from "react";
import { Brain, Database, BarChart3, Code, Cpu, GitBranch, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon?: React.ReactNode;
  description?: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Languages", icon: <Code className="w-5 h-5" />, description: "Primary language for data science" },
    { name: "R", category: "Languages", icon: <Code className="w-5 h-5" />, description: "Statistical computing" },
    { name: "SQL", category: "Languages", icon: <Database className="w-5 h-5" />, description: "Database querying" },
    { name: "JavaScript", category: "Languages", icon: <Code className="w-5 h-5" />, description: "Web development" },
    { name: "Julia", category: "Languages", icon: <Code className="w-5 h-5" />, description: "High-performance computing" },
    
    // Machine Learning
    { name: "TensorFlow", category: "ML/AI", icon: <Brain className="w-5 h-5" />, description: "Deep learning framework" },
    { name: "PyTorch", category: "ML/AI", icon: <Brain className="w-5 h-5" />, description: "Neural networks" },
    { name: "Scikit-learn", category: "ML/AI", icon: <Brain className="w-5 h-5" />, description: "Classic ML algorithms" },
    { name: "NLP", category: "ML/AI", icon: <Brain className="w-5 h-5" />, description: "Natural language processing" },
    { name: "Computer Vision", category: "ML/AI", icon: <Brain className="w-5 h-5" />, description: "Image processing" },
    { name: "LLMs", category: "ML/AI", icon: <Sparkles className="w-5 h-5" />, description: "Large language models" },
    
    // Data Tools
    { name: "Pandas", category: "Data Tools", icon: <BarChart3 className="w-5 h-5" />, description: "Data manipulation" },
    { name: "NumPy", category: "Data Tools", icon: <BarChart3 className="w-5 h-5" />, description: "Numerical computing" },
    { name: "Apache Spark", category: "Data Tools", icon: <Cpu className="w-5 h-5" />, description: "Big data processing" },
    { name: "Tableau", category: "Data Tools", icon: <BarChart3 className="w-5 h-5" />, description: "Data visualization" },
    { name: "Power BI", category: "Data Tools", icon: <BarChart3 className="w-5 h-5" />, description: "Business intelligence" },
    { name: "Plotly", category: "Data Tools", icon: <BarChart3 className="w-5 h-5" />, description: "Interactive visualizations" },
    
    // DevOps & Cloud
    { name: "Git", category: "DevOps", icon: <GitBranch className="w-5 h-5" />, description: "Version control" },
    { name: "AWS", category: "DevOps", icon: <Cpu className="w-5 h-5" />, description: "Cloud services" },
    { name: "Docker", category: "DevOps", icon: <Cpu className="w-5 h-5" />, description: "Containerization" },
    { name: "Kubernetes", category: "DevOps", icon: <Cpu className="w-5 h-5" />, description: "Container orchestration" },
    { name: "CI/CD", category: "DevOps", icon: <GitBranch className="w-5 h-5" />, description: "Automation pipelines" },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Languages": return "from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border-blue-500/30";
      case "ML/AI": return "from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 border-purple-500/30";
      case "Data Tools": return "from-emerald-500/20 to-emerald-600/20 hover:from-emerald-500/30 hover:to-emerald-600/30 border-emerald-500/30";
      case "DevOps": return "from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 border-orange-500/30";
      default: return "from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40 border-primary/30";
    }
  };

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Expertise in data science, machine learning, and analytics
          </p>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === null 
                  ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`
                relative w-32 h-32 flex flex-col items-center justify-center
                bg-gradient-to-br ${getCategoryColor(skill.category)}
                border-2 backdrop-blur-sm
                rounded-2xl rotate-45 transition-all duration-300
                hover:scale-110 hover:rotate-12 cursor-pointer
                ${hoveredSkill === skill.name ? 'shadow-2xl' : 'shadow-lg'}
              `}>
                <div className="-rotate-45 text-center flex flex-col items-center gap-2">
                  <span className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-sm">{skill.name}</span>
                  {hoveredSkill === skill.name && skill.description && (
                    <span className="text-xs text-muted-foreground absolute -bottom-8 whitespace-nowrap bg-background/90 px-2 py-1 rounded-md shadow-md">
                      {skill.description}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;