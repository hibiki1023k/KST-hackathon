'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Login: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      address: formData.get('address') as string,
      domain: formData.get('domain') as string,
      password: formData.get('password') as string,
    }
    // ここでログイン処理を実装
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center h-screen pb-16">
      <Card className="px-6 py-6 w-md">
        <CardHeader>
          <CardTitle>KST-hackathon にログイン</CardTitle>
          <CardDescription>説明欄hogehogehoge</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">メールアドレス</Label>
                <div className="flex gap-1">
                  <Input 
                    id="address"
                    name="address"
                    placeholder="Your Mail Address" 
                    className="w-full"
                  />
                  <p className="flex items-center">@</p>
                  <Select name="domain">
                    <SelectTrigger className="w-[156px]">
                      <SelectValue placeholder="ドメインを選択"/>
                    </SelectTrigger>
                    <SelectContent className="w-[156px]">
                      <SelectGroup className="">
                        <SelectLabel>domain</SelectLabel>
                        <SelectItem value="@mail.kyutech.jp">mail.kyutech.jp</SelectItem>
                        <SelectItem value="@m.titech.ac.jp">m.titech.ac.jp</SelectItem>
                        <SelectItem value="@m.isct.ac.jp">m.isct.ac.jp</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">パスワード</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <CardFooter className="flex justify-center pt-4">
              <Button type="submit" variant="default">ログイン</Button>
            </CardFooter>
          </form>
        </CardContent>
        <div className="flex items-center">
          <div className="w-full h-[1px] mr-1.5 bg-gray-300"/>
          <p>or</p>
          <div className="w-full h-[1px] ml-1.5 bg-gray-300"/>
        </div>
        <CardFooter className="flex justify-center">
          <Button variant="outline">新規登録</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login
