import { useProfileStore } from "@/contexts/profile.context";
import { useNameStore } from "@/store/name-store";

export default function Home() {
  const { name, age, setName, setAge } = useProfileStore((state) => state);
  const { name: ogName, setName: ogSetName } = useNameStore();

  return (
    <div className="pl-[40vw] w-screen h-screen flex flex-col items-left justify-center gap-2">
      <label>Name:{name}</label>
      <label>Age: {age}</label>
      <div>
        Input name:
        <input value={name} onChange={(e) => setName(e.target.value)} />{" "}
      </div>
      <div>
        Input age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>

      <div>Original Name: {ogName}</div>
      <div>
        Input original name:
        <input value={ogName} onChange={(e) => ogSetName(e.target.value)} />
      </div>
    </div>
  );
}
