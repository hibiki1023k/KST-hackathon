'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type Section = "profile" | "stack"

interface FormData {
  name: string;
  affiliation: string;
  mail: string;
  profile: string;
  stacks: Stack[];
}

interface FormErrors {
  name?: string;
  affiliation?: string;
}

interface Stack {
  name: string;
  level: number;
}

const Profile: React.FC = () => {
  const [section, setSection] = useState<Section>("profile")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    affiliation: "",
    mail: "",
    profile: "",
    stacks: [
      {
        name: "",
        level: 1
      }
    ]
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newErrors: FormErrors = {}
    setErrors({}) // エラー状態をリセット
    
    if (!formData.name.trim()) {
      newErrors.name = "名前は必須項目です"
    }
    if (!formData.affiliation.trim()) {
      newErrors.affiliation = "所属は必須項目です"
    }

    setErrors(newErrors) // 全てのエラーを一度にセット
    
    if (Object.keys(newErrors).length > 0) {
      return
    }

    //TODO: API call
  }

  const addStack = () => {
    setFormData(prev => ({
      ...prev,
      stacks: [...prev.stacks, { name: "", level: 1 }]
    }))
  }

  const removeStack = (index: number) => {
    setFormData(prev => ({
      ...prev,
      stacks: prev.stacks.filter((_, i) => i !== index)
    }))
  }

  const handleStackChange = (index: number, field: keyof Stack, value: string) => {
    setFormData(prev => ({
      ...prev,
      stacks: prev.stacks.map((stack, i) => 
        i === index ? { 
          ...stack, 
          [field]: field === 'level' ? parseInt(value) : value 
        } : stack
      )
    }))
  }

  return (
    <div>
      <header className="border-b border-gray-200">
        <Button
        variant={section === "profile" ? "default" : "ghost"}
        size="lg"
        value="profile"
        onClick={() => setSection("profile")}
        >プロフィール</Button>
        <Button
        variant={section === "stack" ? "default" : "ghost"}
        size="lg"
        value="stack"
        onClick={() => setSection("stack")}
        >技術スタック</Button>
      </header>
      {section === "profile" ? (
      <div className="flex justify-center items-center pt-16">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-8 w-2/5">
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">名前 *</Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="affiliation">所属 *</Label>
              <Input
                id="affiliation"
                name="affiliation"
                placeholder="〇〇大学"
                onChange={handleChange}
                value={formData.affiliation}
                required
              />
              {errors.affiliation && <p className="text-sm text-red-500">{errors.affiliation}</p>}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">メールアドレス</Label>
              <Input
                id="mail"
                name="mail"
                disabled
                value="kodai.taro111@mail.kyutech.jp" // user.mail
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="profile">一言</Label>
              <Textarea
              id="profile"
              name="profile"
              placeholder="一言どうぞ！"
              onChange={handleChange}
              value={formData.profile}
              className="whitespace-pre-wrap"
              />
            </div>
          </div>
          <Button type="submit" variant="default">更新</Button>
        </form>
      </div>
      ) : (
        <div className="flex justify-center items-center pt-16">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 w-2/7">
            <div className="grid w-full items-center gap-8">
              {formData.stacks?.map((stack, index) => (
              <div key={index} className="flex flex-col space-y-1.5">
                <div className="flex justify-center gap-4">
                <div>
                  <Label htmlFor={`tech-${index}`}>技術名</Label>
                  <Input
                  id={`tech-${index}`}
                  value={stack.name}
                  onChange={(e) => handleStackChange(index, 'name', e.target.value)}
                  placeholder="例: React"
                  />
                </div>
                <div>
                  <Label htmlFor={`level-${index}`}>習熟度</Label>
                  <Select
                    onValueChange={(value) => handleStackChange(index, 'level', value)}
                    value={stack.level.toString()}
                  >
                    <SelectTrigger>
                      <SelectValue>{stack.level}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  type="button"
                  variant="destructive"
                  onClick={() => removeStack(index)}
                  className="mt-4"
                >
                  削除
                </Button>
                </div>
              </div>
              ))}
              <Button 
              type="button"
              variant="outline"
              onClick={addStack}
              >
              技術を追加
              </Button>
            </div>
            <Button type="submit" variant="default">更新</Button>
            </form>
        </div>
      )}
    </div>
  )
}

export default Profile
