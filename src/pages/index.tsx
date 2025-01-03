import { useAgeStore } from "@/store/age-store";
import { useNameStore } from "@/store/name-store";

export default function Home() {
  const { name, setName } = useNameStore();
  const { age, setAge } = useAgeStore();

  return (
    <div className="m-auto w-screen h-screen flex flex-col items-center justify-center gap-2">
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
    </div>
  );
}
