<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = \App\Models\User::factory()->create([
            'name' => 'Test User 2',
            'email' => 'test@example.com2',
            'password' => Hash::make('test2')
        ]);
        // $posts = Post::factory(10)->create();
        // $user->posts()->saveMany($posts);
    }
}