<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    protected $datas = [
        'Teknologi',
        'Programming',
        'Desain',
        'Tutorial',
        'Berita'
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->datas as $data) {
            Category::create([
                'name' => $data,
                'slug' => Str::slug($data)
            ]);
        }
    }
}
